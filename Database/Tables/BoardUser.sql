USE [SimplyNotes]
GO

ALTER TABLE [dbo].[BoardUser] DROP CONSTRAINT [FK_BoardUser_User]
GO

ALTER TABLE [dbo].[BoardUser] DROP CONSTRAINT [FK_BoardUser_Board]
GO

/****** Object:  Table [dbo].[BoardUser]    Script Date: 25/10/2020 13:08:59 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[BoardUser]') AND type in (N'U'))
DROP TABLE [dbo].[BoardUser]
GO

/****** Object:  Table [dbo].[BoardUser]    Script Date: 25/10/2020 13:08:59 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BoardUser](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BoardId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_BoardUser] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[BoardUser]  WITH CHECK ADD  CONSTRAINT [FK_BoardUser_Board] FOREIGN KEY([BoardId])
REFERENCES [dbo].[Board] ([Id])
GO

ALTER TABLE [dbo].[BoardUser] CHECK CONSTRAINT [FK_BoardUser_Board]
GO

ALTER TABLE [dbo].[BoardUser]  WITH CHECK ADD  CONSTRAINT [FK_BoardUser_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[BoardUser] CHECK CONSTRAINT [FK_BoardUser_User]
GO


