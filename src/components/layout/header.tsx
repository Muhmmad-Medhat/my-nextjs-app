import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const t = useTranslations('components.navigation');
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-5">
        <div className="flex items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-top"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1 className="inline-block align-top my-1.5 ml-2.5 font-bold text-xl leading-none">
            {t('brand_name')}
          </h1>
        </div>
        <div className="flex items-center space-x-2.5">
          {user ? (
            <>
              <span className="mr-2.5 text-gray-700 text-sm">
                {t('welcome_message')} <b>{user.name}</b>!
              </span>
              <Button size="sm" onClick={onLogout}>
                {t('logout_button')}
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" onClick={onLogin}>
                {t('login_button')}
              </Button>
              <Button size="sm" onClick={onCreateAccount}>
                {t('signup_button')}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
