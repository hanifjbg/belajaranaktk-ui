'use client'

import * as React from 'react'
import { AuthTemplate } from '@/components/templates/auth-template'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NeoText } from '@/components/atoms/neo-text'
import { LogIn, Github, Mail } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <AuthTemplate 
      title="Selamat Datang" 
      subtitle="Masuk ke akun orang tua untuk memantau perkembangan si kecil."
    >
      <div className="space-y-6">
        <div className="space-y-2">
           <Label className="font-black uppercase text-xs">Email</Label>
           <Input placeholder="papa@contoh.com" className="neo-border h-12" />
        </div>
        <div className="space-y-2">
           <Label className="font-black uppercase text-xs">Password</Label>
           <Input type="password" placeholder="••••••••" className="neo-border h-12" />
        </div>
        
        <Link href="/app" className="block w-full">
          <button className="w-full bg-wisdom text-white py-4 rounded-neo border-4 border-black neo-shadow neo-shadow-hover font-black uppercase text-xl flex items-center justify-center gap-3 active:translate-y-1 transition-all">
            <LogIn size={20} />
            Masuk Sekarang
          </button>
        </Link>

        <div className="relative py-4">
           <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-border border-dashed"></div>
           </div>
           <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground font-black">Atau masuk dengan</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border-2 border-border rounded-neo font-black uppercase text-xs hover:bg-muted transition-all">
               <Github size={18} /> Github
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border-2 border-border rounded-neo font-black uppercase text-xs hover:bg-muted transition-all">
               <Mail size={18} /> Google
            </button>
        </div>

        <div className="text-center pt-4">
           <NeoText variant="body" size="sm" color="muted">
             Belum punya akun? <Link href="#" className="text-wisdom font-black">Daftar Sekarang</Link>
           </NeoText>
        </div>
      </div>
    </AuthTemplate>
  )
}
