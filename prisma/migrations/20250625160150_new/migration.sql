-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "ProductEC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
