// middleware.ts
import { authConfig } from './auth.config' // مسیر درست نسبت به محل فایل
import NextAuth from 'next-auth'

export default NextAuth(authConfig).auth

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
	// runtime: 'nodejs',   ← این گزینه ممکن است باعث مشکلاتی بشود، اگر راهنما آن را پیشنهاد نمی‌دهد، حذف شود
}
