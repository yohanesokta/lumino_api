-- CreateTable
CREATE TABLE "ProductEC" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductEC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToolEC" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "ToolEC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewEC" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ReviewEC_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ToolEC_name_productId_key" ON "ToolEC"("name", "productId");

-- AddForeignKey
ALTER TABLE "ToolEC" ADD CONSTRAINT "ToolEC_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductEC"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewEC" ADD CONSTRAINT "ReviewEC_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductEC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
