USE [SimplyNotes]
GO
/****** Object:  StoredProcedure [dbo].[GetAllBoard]    Script Date: 19/10/2020 21:32:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTasksByNote]  
@noteId int
AS 
BEGIN
 
 SELECT [Id] , [Name],[Description] ,[DateCreate], [Finished], [UserCreate],
 COUNT(*) OVER() TotalRecords
 FROM [dbo].[Task]
 WHERE [NoteId] = @noteId
 
END