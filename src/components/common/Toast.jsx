import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 size={18} color="#10B981" />;
      case 'error':
        return <AlertCircle size={18} color="#EF4444" />;
      case 'info':
      default:
        return <Info size={18} color="#3B82F6" />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'var(--bg-card)',
        color: 'var(--text-primary)',
        padding: '14px 20px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--border-subtle)',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {getIcon()}
      <span style={{ fontSize: '14px', fontWeight: 500 }}>{toast.message}</span>
    </div>
  );
};
