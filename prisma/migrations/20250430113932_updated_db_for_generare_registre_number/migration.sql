-- AlterTable
ALTER TABLE "registre" ALTER COLUMN "min_val" DROP NOT NULL,
ALTER COLUMN "max_val" DROP NOT NULL;

-- CreateTable
CREATE TABLE "configurare_serie" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "numar_serie" INTEGER NOT NULL,
    "descriere" VARCHAR DEFAULT 'Numar serie pentru generarea intervalelor de registre',

    CONSTRAINT "configurare_serie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_registre_max_val" ON "registre"("max_val");
