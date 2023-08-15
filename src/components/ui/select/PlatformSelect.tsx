'use client';

import { Select, SelectProps, Space } from 'antd';
import React, { useState } from 'react';

const platformData: platformType[] = [
  {
    value: 'Youtube',
    label: 'Youtube',
  },
  {
    value: 'Instagram',
    label: 'Instagram',
  },
  {
    value: 'TikTok',
    label: 'TikTok',
  },
  {
    value: 'Telegram',
    label: 'Telegram',
  },
];

const servicesData = {
  Youtube: [
    {
      value: 'yt-1',
      label: 'Views',
    },
    {
      value: 'yt-2',
      label: 'Likes',
    },
    {
      value: 'yt-3',
      label: 'Subscribers',
    },
  ],
  Instagram: [
    {
      value: 'ig-1',
      label: 'Views',
    },
    {
      value: 'ig-2',
      label: 'Likes',
    },
    {
      value: 'ig-3',
      label: 'Comments',
    },
  ],
  TikTok: [
    {
      value: 'tt-1',
      label: 'Views',
    },
    {
      value: 'tt-2',
      label: 'Likes',
    },
    {
      value: 'tt-3',
      label: 'Comments',
    },
  ],
  Telegram: [
    {
      value: 'tl-1',
      label: 'Views',
    },
    {
      value: 'tl-2',
      label: 'Members',
    },
    {
      value: 'tl-3',
      label: 'Reactions',
    },
  ],
};

type platformName = keyof typeof servicesData;

type platformType = {
  value: platformName;
  label: platformName;
};

type ServiceOption = {
  value: string;
  label: string;
};

type Props = {} & SelectProps;

export function PlatformSelect({ className }: Props) {
  const [platform, setPlatform] = useState<platformName>(platformData[0].value);
  const [services, setServices] = useState<ServiceOption[]>(
    servicesData[platform]
  );
  const [serviceValue, setServiceValue] = useState<string | undefined>(
    undefined
  );

  function onChangePlatform(value: platformName) {
    setPlatform(value);
    setServiceValue(undefined);
    if (value) {
      setServices(servicesData[value]);
      return;
    }
    setServices([]);
  }

  function onChangeService(value: string) {
    setServiceValue(value);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <Select
        className={className}
        showSearch
        options={platformData}
        onChange={onChangePlatform}
        value={platform}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
      <Select
        className={className}
        showSearch
        options={services}
        placeholder="Select Service"
        value={serviceValue}
        onChange={onChangeService}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
    </div>
  );
}
