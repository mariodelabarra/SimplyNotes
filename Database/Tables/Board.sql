USE [SimplyNotes]
GO

ALTER TABLE [dbo].[Board] DROP CONSTRAINT [FK_Boards_Users]
GO

/****** Object:  Table [dbo].[Board]    Script Date: 25/10/2020 13:09:08 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Board]') AND type in (N'U'))
DROP TABLE [dbo].[Board]
GO

/****** Object:  Table [dbo].[Board]    Script Date: 25/10/2020 13:09:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Board](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](255) NULL,
	[DateCreate] [date] NOT NULL,
	[UserCreate] [int] NOT NULL,
 CONSTRAINT [PK_Boards] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Board]  WITH CHECK ADD  CONSTRAINT [FK_Boards_Users] FOREIGN KEY([UserCreate])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[Board] CHECK CONSTRAINT [FK_Boards_Users]
GO


