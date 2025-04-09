/*
  Warnings:

  - You are about to drop the column `markdown` on the `ArticleTranslation` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Markdown" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ArticleTranslation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lang" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "markdownId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "articleId" TEXT NOT NULL,
    CONSTRAINT "ArticleTranslation_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ArticleTranslation" ("articleId", "createdAt", "id", "lang", "preview", "title", "updatedAt") SELECT "articleId", "createdAt", "id", "lang", "preview", "title", "updatedAt" FROM "ArticleTranslation";
DROP TABLE "ArticleTranslation";
ALTER TABLE "new_ArticleTranslation" RENAME TO "ArticleTranslation";
CREATE UNIQUE INDEX "ArticleTranslation_articleId_lang_key" ON "ArticleTranslation"("articleId", "lang");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
