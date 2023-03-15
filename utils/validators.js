import Val from 'validator';

export const isEmail = (str) =>
  Val.isEmail(str, {
    allow_display_name: false,
    allow_ip_domain: false,
    allow_utf8_local_part: false,
    blacklisted_chars: '+',
    domain_specific_validation: true,
    host_blacklist: [],
    ignore_max_length: false,
    require_display_name: false,
    require_tld: false,
  });

export const isValidPassword = (str) =>
  !/[^\u0020-\u024F][\u007F]/.test(str) &&
  Val.isLength(str) &&
  Val.contains(
    str,
    [
      /[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]/,
      /[\u0030-\u0039]/,
    ],
    { minOccurrences: 1 }
  );

export const isPhoneValid = (str) => Val.isMobilePhone(str, ['pt-PT']);
