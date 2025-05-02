-- DropForeignKey
ALTER TABLE "utilizatori" DROP CONSTRAINT "utilizatori_rol_id_fkey";

-- AddForeignKey
ALTER TABLE "utilizatori" ADD CONSTRAINT "utilizatori_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "roluri"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
