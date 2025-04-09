/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToTag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id,lang]` on the table `ProjectTranslation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProjectTranslation_projectId_lang_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tag";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TagTranslation";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProjectToTag";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProjectTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToProjectTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProjectToProjectTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectToProjectTag_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjectTag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTag_value_key" ON "ProjectTag"("value");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTag_id_value_key" ON "ProjectTag"("id", "value");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToProjectTag_AB_unique" ON "_ProjectToProjectTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToProjectTag_B_index" ON "_ProjectToProjectTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTranslation_id_lang_key" ON "ProjectTranslation"("id", "lang");
