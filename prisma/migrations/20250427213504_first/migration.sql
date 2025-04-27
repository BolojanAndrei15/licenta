-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tabela" TEXT NOT NULL,
    "cheie_primara" TEXT NOT NULL,
    "actiune" TEXT NOT NULL,
    "utilizator_id" UUID,
    "timestamp" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "date_vechi" JSONB,
    "date_noi" JSONB,
    "severitate" TEXT NOT NULL DEFAULT 'INFO',
    "mesaj" TEXT NOT NULL DEFAULT '',
    "detalii_modificari" JSONB,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backup_logs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "data_backup" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "locatie_fisier" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "mesaj_eroare" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "backup_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departamente" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nume" TEXT NOT NULL,
    "descriere" TEXT NOT NULL,

    CONSTRAINT "departamente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documente" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "registru_id" UUID NOT NULL,
    "numar_inregistrare" INTEGER NOT NULL,
    "data" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numar_document" TEXT NOT NULL,
    "data_document" DATE NOT NULL,
    "sursa" TEXT NOT NULL,
    "rezumat" TEXT NOT NULL,
    "departament_adresat" UUID,
    "destinatar_id" UUID,
    "tip_document_id" UUID NOT NULL,
    "data_expedierii" DATE NOT NULL,
    "creat_la" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "inregistrat_de" UUID NOT NULL,
    "preluat_de" UUID,
    "stadiu" TEXT NOT NULL DEFAULT 'În așteptare',

    CONSTRAINT "documente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificari" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "document_id" UUID,
    "destinatar_id" UUID NOT NULL,
    "mesaj" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'neatribuit',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "citita" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "notificari_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registre" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nume" TEXT NOT NULL,
    "descriere" TEXT NOT NULL,
    "departament_id" UUID NOT NULL,
    "min_val" INTEGER NOT NULL,
    "max_val" INTEGER NOT NULL,
    "an" INTEGER NOT NULL,

    CONSTRAINT "registre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roluri" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nume" TEXT NOT NULL,
    "descriere" TEXT NOT NULL,

    CONSTRAINT "roluri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipuri_documente" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nume" TEXT NOT NULL,

    CONSTRAINT "tipuri_documente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utilizatori" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "session_token" TEXT,
    "refresh_token" TEXT,
    "session_expires" TIMESTAMP(6),
    "nume" TEXT NOT NULL,
    "departament_id" UUID NOT NULL,
    "rol_id" UUID NOT NULL,

    CONSTRAINT "utilizatori_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_audit_logs_tabela" ON "audit_logs"("tabela");

-- CreateIndex
CREATE INDEX "idx_audit_logs_timestamp" ON "audit_logs"("timestamp");

-- CreateIndex
CREATE INDEX "idx_audit_logs_utilizator_id" ON "audit_logs"("utilizator_id");

-- CreateIndex
CREATE UNIQUE INDEX "departamente_nume_key" ON "departamente"("nume");

-- CreateIndex
CREATE INDEX "idx_documente_destinatar_id" ON "documente"("destinatar_id");

-- CreateIndex
CREATE INDEX "idx_documente_registru_id" ON "documente"("registru_id");

-- CreateIndex
CREATE INDEX "idx_documente_stadiu" ON "documente"("stadiu");

-- CreateIndex
CREATE UNIQUE INDEX "documente_registru_id_numar_inregistrare_key" ON "documente"("registru_id", "numar_inregistrare");

-- CreateIndex
CREATE INDEX "idx_registre_an" ON "registre"("an");

-- CreateIndex
CREATE UNIQUE INDEX "registre_nume_departament_id_an_key" ON "registre"("nume", "departament_id", "an");

-- CreateIndex
CREATE UNIQUE INDEX "roluri_nume_key" ON "roluri"("nume");

-- CreateIndex
CREATE UNIQUE INDEX "tipuri_documente_nume_key" ON "tipuri_documente"("nume");

-- CreateIndex
CREATE UNIQUE INDEX "utilizatori_email_key" ON "utilizatori"("email");

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_utilizator_id_fkey" FOREIGN KEY ("utilizator_id") REFERENCES "utilizatori"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "documente" ADD CONSTRAINT "documente_departament_adresat_fkey" FOREIGN KEY ("departament_adresat") REFERENCES "departamente"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "documente" ADD CONSTRAINT "documente_destinatar_id_fkey" FOREIGN KEY ("destinatar_id") REFERENCES "utilizatori"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "documente" ADD CONSTRAINT "documente_inregistrat_de_fkey" FOREIGN KEY ("inregistrat_de") REFERENCES "utilizatori"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "documente" ADD CONSTRAINT "documente_preluat_de_fkey" FOREIGN KEY ("preluat_de") REFERENCES "utilizatori"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "documente" ADD CONSTRAINT "documente_registru_id_fkey" FOREIGN KEY ("registru_id") REFERENCES "registre"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "documente" ADD CONSTRAINT "documente_tip_document_id_fkey" FOREIGN KEY ("tip_document_id") REFERENCES "tipuri_documente"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificari" ADD CONSTRAINT "notificari_destinatar_id_fkey" FOREIGN KEY ("destinatar_id") REFERENCES "utilizatori"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificari" ADD CONSTRAINT "notificari_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documente"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "registre" ADD CONSTRAINT "registre_departament_id_fkey" FOREIGN KEY ("departament_id") REFERENCES "departamente"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "utilizatori" ADD CONSTRAINT "utilizatori_departament_id_fkey" FOREIGN KEY ("departament_id") REFERENCES "departamente"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "utilizatori" ADD CONSTRAINT "utilizatori_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "roluri"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
