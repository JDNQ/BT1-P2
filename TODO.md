# TODO - Product Form với Variants (Dynamic)

## 1) Backend (NestJS + Prisma + MySQL + Swagger)

- [ ] Tạo cấu trúc thư mục backend: `backend/src/products/...`, `backend/src/prisma/...`, `backend/prisma/schema.prisma`, `backend/src/main.ts`
- [ ] Cài dependencies (NestJS, Prisma, swagger, class-validator/transformer)
- [ ] Implement Prisma schema cho `Product` và `Variant`
- [ ] Implement DTOs: `CreateProductDto`, `CreateVariantDto` với class-validator
- [ ] Implement ProductsService: CRUD + include variants
- [ ] Implement ProductsController: routes + Swagger decorators
- [ ] Enable Swagger tại `GET /api`

## 2) Frontend (NextJS App Router + React Hook Form + Zod + Tailwind)

- [ ] Tạo cấu trúc thư mục frontend: `frontend/src/app/products/page.tsx`, `frontend/src/components/...`, `frontend/src/schemas/...`
- [ ] Implement Zod schema đúng spec
- [ ] Implement `ProductForm`, `VariantList`, `VariantRow` với useFieldArray (key bằng field.id)
- [ ] Realtime: tổng variants + tổng stock bằng useWatch
- [ ] UI/validation/error rendering đúng yêu cầu
- [ ] Submit: gọi `POST /products` và `console.log` response

## 3) Chạy & kiểm tra

- [x] Chạy backend (migrations + seed nếu cần)
- [ ] Chạy frontend
- [ ] Test flow tạo product kèm variants
