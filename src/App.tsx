import React from 'react'
import { Mail, Phone, Linkedin, ShoppingBag, CommandIcon as BrandAmazon, Facebook, Instagram, MessageCircle, Award, BarChart, Briefcase, PenTool as Tool, TrendingUp, Users, DollarSign, Code, Layout, Database, Globe } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const salesData = [
  { month: 'Jan', sales: 15000 },
  { month: 'Feb', sales: 18500 },
  { month: 'Mar', sales: 25700 },
  { month: 'Apr', sales: 22000 },
  { month: 'May', sales: 29400 },
  { month: 'Jun', sales: 36800 },
]

const platformData = [
  { name: 'Amazon', value: 45 },
  { name: 'Noon', value: 30 },
  { name: 'Carrefour', value: 15 },
  { name: 'Shopify', value: 10 },
]

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']

const formatCurrency = (value: number) => {
  return `AED ${value.toLocaleString()}`
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Hero Section */}
      <header className="relative py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Derick R. Cabrera</h1>
          <p className="text-xl text-blue-200 mb-8">E-commerce Specialist & Full Stack Developer | Amazon & Digital Marketing Strategist</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:Dcabrera70074@gmail.com" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Dcabrera70074@gmail.com</span>
            </a>
            <a href="tel:+971567152684" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+971 56 715 2684</span>
            </a>
            <a href="https://linkedin.com/in/derick-cabrera-499797299" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold">AED 9.2M+</div>
              <div className="text-blue-200">Revenue Generated</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold">250%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-blue-200">Products Managed</div>
            </div>
          </div>
        </div>
      </header>

      {/* Performance Charts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sales Growth Chart */}
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Monthly Sales Growth</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="salesColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" tickFormatter={formatCurrency} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      formatter={(value: number) => [formatCurrency(value), 'Sales']}
                    />
                    <Area type="monotone" dataKey="sales" stroke="#3B82F6" fillOpacity={1} fill="url(#salesColor)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Platform Distribution */}
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Platform Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {platformData.map((platform, index) => (
                  <div key={platform.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-blue-200">{platform.name} ({platform.value}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-blue-200 leading-relaxed">
            I'm a versatile professional combining E-commerce expertise with Full Stack Development skills. My unique blend of technical knowledge and marketing strategy allows me to create seamless digital experiences while driving business growth. From building responsive web applications to optimizing e-commerce platforms, I bring a comprehensive approach to digital success.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Tools</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-xl transform hover:scale-105 transition-transform">
              <Code className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Development</h3>
              <ul className="text-blue-200 space-y-2">
                <li>React & TypeScript</li>
                <li>Next.js & Vite</li>
                <li>Node.js & Express</li>
                <li>TailwindCSS & SCSS</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl transform hover:scale-105 transition-transform">
              <Layout className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Design</h3>
              <ul className="text-blue-200 space-y-2">
                <li>Figma & Adobe XD</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl transform hover:scale-105 transition-transform">
              <ShoppingBag className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">E-commerce</h3>
              <ul className="text-blue-200 space-y-2">
                <li>Amazon & Noon</li>
                <li>Shopify Development</li>
                <li>Custom E-commerce</li>
                <li>Payment Integration</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl transform hover:scale-105 transition-transform">
              <Globe className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Digital Marketing</h3>
              <ul className="text-blue-200 space-y-2">
                <li>SEO Optimization</li>
                <li>Analytics & Tracking</li>
                <li>Content Strategy</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Full Stack Developer & E-commerce Specialist</h3>
                  <p className="text-blue-200">2024 - Present</p>
                </div>
              </div>
              <ul className="text-blue-200 space-y-2 list-disc list-inside">
                <li>Developing responsive web applications using React and TypeScript</li>
                <li>Creating custom e-commerce solutions and integrations</li>
                <li>Implementing SEO strategies and performance optimizations</li>
                <li>Managing marketplace listings and PPC campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Portfolio Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://www.amazon.ae/Baseus" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-4 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
              <BrandAmazon className="w-8 h-8 text-blue-400" />
              <span className="text-white">Amazon Store</span>
            </a>
            <a href="https://www.noon.com/uae-en/~baseus/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
              <ShoppingBag className="w-8 h-8 text-blue-400" />
              <span className="text-white">Noon Store</span>
            </a>
            <a href="https://www.facebook.com/share/15b9mTVPvR/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
              <Facebook className="w-8 h-8 text-blue-400" />
              <span className="text-white">Facebook</span>
            </a>
            <a href="https://www.instagram.com/baseus_uae" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
              <Instagram className="w-8 h-8 text-blue-400" />
              <span className="text-white">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:Dcabrera70074@gmail.com" 
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a href="https://wa.me/971567152684" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-blue-200">
        <p>© 2024 Derick R. Cabrera. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App