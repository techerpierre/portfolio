/*
  Warnings:

  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProjectTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProjectTranslation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cover" TEXT,
    "coverAlt" TEXT,
    "github" TEXT,
    "website" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Project" ("cover", "coverAlt", "github", "id", "website") SELECT "cover", "coverAlt", "github", "id", "website" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_ProjectTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "ProjectTag_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProjectTag" ("id", "projectId", "value") SELECT "id", "projectId", "value" FROM "ProjectTag";
DROP TABLE "ProjectTag";
ALTER TABLE "new_ProjectTag" RENAME TO "ProjectTag";
CREATE TABLE "new_ProjectTranslation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lang" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "ProjectTranslation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProjectTranslation" ("description", "id", "lang", "projectId", "title") SELECT "description", "id", "lang", "projectId", "title" FROM "ProjectTranslation";
DROP TABLE "ProjectTranslation";
ALTER TABLE "new_ProjectTranslation" RENAME TO "ProjectTranslation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
