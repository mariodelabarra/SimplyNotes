USE [SimplyNotes]
GO

ALTER TABLE [dbo].[Note] DROP CONSTRAINT [FK_Notes_Users1]
GO

ALTER TABLE [dbo].[Note] DROP CONSTRAINT [FK_Notes_Board1]
GO

/****** Object:  Table [dbo].[Note]    Script Date: 25/10/2020 13:08:52 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Note]') AND type in (N'U'))
DROP TABLE [dbo].[Note]
GO

/****** Object:  Table [dbo].[Note]    Script Date: 25/10/2020 13:08:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Note](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Description] [ntext] NULL,
	[DateCreate] [date] NOT NULL,
	[UserId] [int] NOT NULL,
	[BoardId] [int] NOT NULL,
 CONSTRAINT [PK_Notes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Note]  WITH CHECK ADD  CONSTRAINT [FK_Notes_Board1] FOREIGN KEY([BoardId])
REFERENCES [dbo].[Board] ([Id])
GO

ALTER TABLE [dbo].[Note] CHECK CONSTRAINT [FK_Notes_Board1]
GO

ALTER TABLE [dbo].[Note]  WITH CHECK ADD  CONSTRAINT [FK_Notes_Users1] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[Note] CHECK CONSTRAINT [FK_Notes_Users1]
GO


