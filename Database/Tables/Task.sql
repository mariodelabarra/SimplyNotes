USE [SimplyNotes]
GO

ALTER TABLE [dbo].[Task] DROP CONSTRAINT [FK_Task_Note]
GO

/****** Object:  Table [dbo].[Task]    Script Date: 25/10/2020 13:08:46 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Task]') AND type in (N'U'))
DROP TABLE [dbo].[Task]
GO

/****** Object:  Table [dbo].[Task]    Script Date: 25/10/2020 13:08:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Task](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NOT NULL,
	[Description] [text] NOT NULL,
	[DateCreate] [date] NOT NULL,
	[Finished] [bit] NOT NULL,
	[UserCreate] [int] NOT NULL,
	[NoteId] [int] NOT NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_Note] FOREIGN KEY([NoteId])
REFERENCES [dbo].[Note] ([Id])
GO

ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_Note]
GO


