import { FloatButton } from 'antd';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

type Props = {};

export function LiveChatButton({}: Props) {
  return (
    <FloatButton
      icon={<FaTelegramPlane />}
      type="primary"
      tooltip="Live Chat"
    />
  );
}
