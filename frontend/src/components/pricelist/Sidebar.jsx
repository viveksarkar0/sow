import React from 'react'
import {
  FiFileText,
  FiUsers,
  FiBriefcase,
  FiBarChart2,
  FiDollarSign,
  FiClipboard,
  FiAlertTriangle,
  FiZap,
  FiPackage,
  FiUser,
  FiUpload,
  FiLogOut,
} from 'react-icons/fi'

const STR = {
  en: {
    menu: 'Menu',
    items: [
      { icon: FiFileText, label: 'Invoices' },
      { icon: FiUsers, label: 'Customers' },
      { icon: FiBriefcase, label: 'My Business' },
      { icon: FiBarChart2, label: 'Invoice Journal' },
      { icon: FiDollarSign, label: 'Price List', active: true },
      { icon: FiClipboard, label: 'Multiple Invoicing' },
      { icon: FiAlertTriangle, label: 'Unpaid Invoices' },
      { icon: FiZap, label: 'Offer' },
      { icon: FiPackage, label: 'Inventory Control' },
      { icon: FiUser, label: 'Member Invoicing' },
      { icon: FiUpload, label: 'Import/Export' },
      { icon: FiLogOut, label: 'Log out' },
    ],
  },
  sv: {
    menu: 'Meny',
    items: [
      { icon: FiFileText, label: 'Fakturor' },
      { icon: FiUsers, label: 'Kunder' },
      { icon: FiBriefcase, label: 'Mitt Företag' },
      { icon: FiBarChart2, label: 'Fakturajournal' },
      { icon: FiDollarSign, label: 'Prislista', active: true },
      { icon: FiClipboard, label: 'Massfakturering' },
      { icon: FiAlertTriangle, label: 'Obetalda Fakturor' },
      { icon: FiZap, label: 'Offert' },
      { icon: FiPackage, label: 'Lagerkontroll' },
      { icon: FiUser, label: 'Medlemsfakturering' },
      { icon: FiUpload, label: 'Import/Export' },
      { icon: FiLogOut, label: 'Logga ut' },
    ],
  },
}

export default function Sidebar({ open = false, onClose, locale = 'en' }) {
  const t = STR[locale] || STR.en
  return (
    <>
      {/* overlay only on small screens */}
      <div className={open ? 'app-overlay show' : 'app-overlay'} onClick={onClose} />
      <aside className={open ? 'sidebar open' : 'sidebar'}>
        <div className="sidebar-header">
          <h4>{t.menu}</h4>
        </div>
        <ul className="menu-list">
          {t.items.map((it) => {
            const Icon = it.icon
            return (
              <li key={it.label} className={'menu-item' + (it.active ? ' active' : '')}>
                <span className="menu-icon" aria-hidden="true"><Icon /></span>
                <span>{it.label}</span>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
