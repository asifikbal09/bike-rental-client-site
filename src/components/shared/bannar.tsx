import React from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface PageBannerProps {
  title: string
  breadcrumbs: BreadcrumbItem[]
  backgroundImage?: string
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  breadcrumbs,
  backgroundImage = "https://i.ibb.co.com/HXRj9rF/banner-style-background-03.jpg" 
}) => {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-gray-400">/</span>}
              {item.path ? (
                <Link 
                  to={item.path}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-400">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageBanner

