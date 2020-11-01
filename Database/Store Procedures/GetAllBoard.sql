USE [SimplyNotes]
GO
/****** Object:  StoredProcedure [dbo].[GetAllBoard]    Script Date: 19/10/2020 21:32:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[GetAllBoard]  
@userId int,
@page int,
@rows int
AS 
BEGIN  

 
 SELECT [Id] ,[Name] ,[Description] ,[DateCreate], [UserCreate],
 COUNT(*) OVER() TotalRecords
 FROM [dbo].[Board]
 WHERE [UserCreate] = @userId
 ORDER BY [Id]
 OFFSET (@page - 1) * @rows ROWS                  
 FETCH NEXT @rows ROWS ONLY
 
END