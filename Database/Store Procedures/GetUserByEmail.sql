USE [SimplyNotes]
GO

/****** Object:  StoredProcedure [dbo].[GetUserByEmail]    Script Date: 25/10/2020 18:14:54 ******/
DROP PROCEDURE [dbo].[GetUserByEmail]
GO

/****** Object:  StoredProcedure [dbo].[GetUserByEmail]    Script Date: 25/10/2020 18:14:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[GetUserByEmail]  
@email varchar(100)
AS 
BEGIN  

 
 SELECT TOP (1) [Id] , [Username] ,[FirstName] ,[LastName], [Email]
      ,[Password]
      ,[Role]
      ,[DateCreate]
      ,[BirthDay]
 FROM [dbo].[User]
 WHERE [Email] = @email
 
END
GO


