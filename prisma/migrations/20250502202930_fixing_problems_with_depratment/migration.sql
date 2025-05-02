-- DropForeignKey
ALTER TABLE "utilizatori" DROP CONSTRAINT "utilizatori_departament_id_fkey";

-- AddForeignKey
ALTER TABLE "utilizatori" ADD CONSTRAINT "utilizatori_departament_id_fkey" FOREIGN KEY ("departament_id") REFERENCES "departamente"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
