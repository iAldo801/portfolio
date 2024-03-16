import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as Icons from '@tabler/icons-react';

type IconSize = 'default' | 'sm' | 'lg' | 'xl';

const sizes: Record<IconSize, string> = {
    default: '1.25rem',
    sm: '1rem',
    lg: '1.5rem',
    xl: '2rem',
};

const iconVariants = cva(
    '...',
    {
        variants: {
            size: {
                ...sizes,
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

interface IconProps extends VariantProps<typeof iconVariants> {
    name: keyof typeof Icons;
    color?: string;
    size?: IconSize | null | undefined;
}

const IconTabler: React.FC<IconProps & React.HTMLAttributes<HTMLElement>> = ({ name, color, size, ...rest }) => {
    const IconComponent = Icons[name] as React.ComponentType<{ size?: string; color?: string }>;

    if (!IconComponent) {
        throw new Error(`Icon ${name} does not exist in Tabler icons library.`);
    }

    if (size && !Object.keys(sizes).includes(size)) {
        throw new Error(`Invalid size prop provided to Icon component. Expected one of: ${Object.keys(sizes).join(', ')}.`);
    }

    const sizeValue = sizes[size as IconSize] || sizes.default;

    return <IconComponent size={sizeValue} color={color} {...rest} />;
};

export { IconTabler, iconVariants };