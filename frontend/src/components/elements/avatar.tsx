import { Avatar as FlowbiteAvatar, type AvatarProps } from "flowbite-react";

export { AvatarProps };

export function Avatar({ className, rounded = true, ...rest }: AvatarProps) {
  return (
    <FlowbiteAvatar
      className={`${className} justify-start`}
      rounded={rounded}
      {...rest}
    />
  );
}
