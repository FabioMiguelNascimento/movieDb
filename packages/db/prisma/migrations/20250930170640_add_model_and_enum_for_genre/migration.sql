-- CreateEnum
CREATE TYPE "public"."Type" AS ENUM ('movie', 'tv');

-- CreateTable
CREATE TABLE "public"."Genre" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."Type" NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_id_type_key" ON "public"."Genre"("id", "type");
