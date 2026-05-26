import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { VariantsModule } from "./variants/variants.module";

@Module({
  imports: [ProductsModule, VariantsModule],
})
export class AppModule {}
