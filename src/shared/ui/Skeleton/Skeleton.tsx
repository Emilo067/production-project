import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    radius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        radius, height, className, width,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: radius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
