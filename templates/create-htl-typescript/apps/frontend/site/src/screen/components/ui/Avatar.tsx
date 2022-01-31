import ReactAvatar, { ReactAvatarProps } from 'react-avatar';

interface Props extends ReactAvatarProps {}

export function Avatar(props: Props): JSX.Element {
  return <ReactAvatar {...props} />;
}
