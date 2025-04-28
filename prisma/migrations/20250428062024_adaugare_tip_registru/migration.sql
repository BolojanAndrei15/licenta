/*
  Warnings:

  - Added the required column `tip_registru_id` to the `registre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registre" ADD COLUMN     "tip_registru_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "tipuri_registru" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nume" TEXT NOT NULL,

    CONSTRAINT "tipuri_registru_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipuri_registru_nume_key" ON "tipuri_registru"("nume");

-- AddForeignKey
ALTER TABLE "registre" ADD CONSTRAINT "registre_tip_registru_id_fkey" FOREIGN KEY ("tip_registru_id") REFERENCES "tipuri_registru"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
