-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shorted" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "qrcode" TEXT NOT NULL,
    "expired_at" TIMESTAMP(3),

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "url_shorted_key" ON "url"("shorted");
