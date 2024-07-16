/*
  Warnings:

  - A unique constraint covering the columns `[shorted]` on the table `url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "url_shorted_key" ON "url"("shorted");
