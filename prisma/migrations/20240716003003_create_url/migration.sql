-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shorted" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "qrcode" TEXT NOT NULL
);
