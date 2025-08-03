"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(true);
  const [showPasswordError, setShowPasswordError] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm rounded-xl shadow-lg">
        {/* The CardHeader now has correct padding to match the design */}
        <CardHeader className="text-center p-6 pb-0">
          <h1 className="text-2xl font-bold mb-1">Welcome to VoteSecure</h1>
          <p className="text-sm text-gray-500">
            Login to your account to cast your vote or manage elections.
          </p>
        </CardHeader>
        {/* The CardContent now has correct padding to match the design */}
        <CardContent className="w-full p-6">
          {/* Login/Register Tabs */}
          <div className="flex w-full mb-6 rounded-lg bg-gray-100 p-1">
            <Button
              variant={activeTab === 'login' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('login')}
              className={`flex-1 rounded-md py-2 text-sm font-semibold ${
                activeTab === 'login' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
              }`}
            >
              Login
            </Button>
            <Button
              variant={activeTab === 'register' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('register')}
              className={`flex-1 rounded-md py-2 text-sm font-semibold ${
                activeTab === 'register' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
              }`}
            >
              Register
            </Button>
          </div>

          <div className="space-y-4">
            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                className="bg-gray-50"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setShowEmailError(false);
                }}
              />
              {showEmailError && (
                <p className="text-xs text-red-500">Please enter a valid email address.</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="bg-gray-50 pr-10"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setShowPasswordError(false);
                  }}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-1 text-gray-500 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {showPasswordError && (
                <p className="text-xs text-red-500">Password must be at least 8 characters.</p>
              )}
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="font-normal text-gray-600">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
              Login
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
              Register
            </a>
          </p>

          <p className="mt-8 text-center text-xs text-gray-400">
            By continuing, you agree to VoteSecure's{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
