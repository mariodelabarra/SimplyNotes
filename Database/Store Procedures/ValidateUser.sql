USE [SimplyNotes]
GO

/****** Object:  StoredProcedure [dbo].[ValidateUser]    Script Date: 25/10/2020 18:16:20 ******/
DROP PROCEDURE [dbo].[ValidateUser]
GO

/****** Object:  StoredProcedure [dbo].[ValidateUser]    Script Date: 25/10/2020 18:16:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ValidateUser]  
@email varchar(100),  
@password varchar(20) 
AS 
BEGIN  
SELECT [Id],[Email],[FirstName],[LastName],[Role]  
FROM [dbo].[User]  
WHERE [Email]=@email AND [Password]=@password 
END


GO


