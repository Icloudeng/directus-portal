import * as React from 'react';

import cn from '@/lib/cn';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/ui/links/UnstyledLink';

const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'inline-flex items-center',
          'font-medium text-primary-600 hover:text-primary-500',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
