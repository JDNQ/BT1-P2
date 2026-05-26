# Plan: Thêm thông báo “đã lưu sản phẩm vào DB chưa”

## Information Gathered

- Backend: `backend/src/products/products.service.ts` tạo product + variants bằng `prisma.product.create(...)` và trả về object product kèm variants.
- Frontend: `frontend/src/components/ProductForm.tsx` gửi POST tới `http://localhost:3001/products` và hiện đang chỉ `console.log(data)`.
- Không thấy sẵn toast/notification component trong `frontend/src`.

## Plan

1. Backend (tùy chọn nhưng khuyến nghị): trả về một trường rõ ràng (ví dụ `success: true` và/hoặc `message`) để frontend hiển thị.
2. Frontend: trong `ProductForm.tsx` thêm state `notification` (type: success/error/loading), render một block alert ngay trong form.
3. Khi submit:
   - set `loading` (dựa vào `isSubmitting` hiện có),
   - nếu `res.ok` và có `success`/data hợp lệ => hiển thị thông báo “Đã lưu sản phẩm vào DB thành công”.
   - nếu lỗi => hiển thị “Lưu thất bại”.
4. Dọn lại `console.log` (giữ lại cũng được), đảm bảo UX: thông báo biến mất khi người dùng submit lại.

## Dependent Files to be edited

- `frontend/src/components/ProductForm.tsx`
- (khuyến nghị) `backend/src/products/products.service.ts`

## Followup steps

- Chạy backend và frontend, submit form và kiểm tra hiển thị thông báo.
- Nếu cần, cập nhật styling alert bằng Tailwind có sẵn.
