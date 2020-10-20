USE [SimplyNotes]
GO
/****** Object:  StoredProcedure [dbo].[GetAllBoard]    Script Date: 19/10/2020 21:32:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetNotesByBoard]  
@boardId int
AS 
BEGIN
 
 SELECT [Id] ,[Title] ,[Description] ,[DateCreate], [UserId], [BoardId],
 COUNT(*) OVER() TotalRecords
 FROM [dbo].[Note]
 WHERE [BoardId] = @boardId
 
END