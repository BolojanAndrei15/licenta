-- DropForeignKey
ALTER TABLE "utilizatori" DROP CONSTRAINT "utilizatori_departament_id_fkey";

-- AlterTable
ALTER TABLE "utilizatori" ALTER COLUMN "rol_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "utilizatori" ADD CONSTRAINT "utilizatori_departament_id_fkey" FOREIGN KEY ("departament_id") REFERENCES "departamente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
