/*
  Warnings:

  - You are about to drop the `ArticleTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArticleToArticleTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToProjectTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ArticleToArticleTag" DROP CONSTRAINT "_ArticleToArticleTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToArticleTag" DROP CONSTRAINT "_ArticleToArticleTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToProjectTag" DROP CONSTRAINT "_ProjectToProjectTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToProjectTag" DROP CONSTRAINT "_ProjectToProjectTag_B_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "tags" "TArticleTag"[];

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "tags" "TProjectTag"[];

-- DropTable
DROP TABLE "ArticleTag";

-- DropTable
DROP TABLE "ProjectTag";

-- DropTable
DROP TABLE "_ArticleToArticleTag";

-- DropTable
DROP TABLE "_ProjectToProjectTag";
