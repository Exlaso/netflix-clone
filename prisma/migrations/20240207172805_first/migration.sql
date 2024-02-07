-- CreateTable
CREATE TABLE "Userstats" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "video_id" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,
    "favourite" BOOLEAN,
    "watched" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Userstats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userstats_user_id_video_id_key" ON "Userstats"("user_id", "video_id");
