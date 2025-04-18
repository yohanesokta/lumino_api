-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "content" TEXT[] DEFAULT ARRAY[]::TEXT[];
