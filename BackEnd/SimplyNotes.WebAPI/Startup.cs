using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SimplyNotes.BusinessLogic.Implementations;
using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.DataAccess;
using SimplyNotes.UnitOfWork;
using SimplyNotes.WebAPI.Authentication;
using SimplyNotes.WebAPI.GlobalErrorHandling;

namespace SimplyNotes.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IBoardLogic, BoardLogic>();
            services.AddTransient<INoteLogic, NoteLogic>();
            services.AddTransient<ITaskLogic, TaskLogic>();
            services.AddTransient<IUserLogic, UserLogic>();

            services.AddSingleton<IUnitOfWork>(option => new SimplyNotesUnitOfWork(
                Configuration.GetConnectionString("SimplyNotes")
                ));

            var tokenProvider = new JwtProvider("issuer", "audience", "simplynotes_2000");
            services.AddSingleton<ITokenProvider>(tokenProvider);

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme) // This is how specify to the API that It will work with JWT
                .AddJwtBearer(options => 
                {
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = tokenProvider.GetValidationParameters(); // Validate that the TOKEN that is sent from the client it is valid
                });
            services.AddAuthorization(auth => // We specify to the Framework that It will work with Authorization
            {
                auth.DefaultPolicy = new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser()
                    .Build();
            });
            services.AddCors();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseHttpsRedirection();

            app.UseAuthentication(); // It will use authentication

            app.UseRouting();

            app.ConfigureExceptionHandler();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
