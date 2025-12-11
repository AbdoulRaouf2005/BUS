import { colors } from "./colors";

const themes = {
      colors: {
            ...colors,
            cardBackground: colors.surface,
            textSecondary: colors.text.secondary
      },
      spacing:{
            xs:4,
            sm:8,
            md:16,
            lg:24,
            xl:32,
      },
      borderRadius:{
            sm:4,
            md:8,
            lg:12,
            xl:16,
            xxl:24
      },
      typography:{
            h1:{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: colors.text.primary,
                  lineHeight: 34
            },
            h2:{
                fontSize: 22,
                  fontWeight: '600',
                  color: colors.text,
                  lineHeight: 28  
            },
            h3:{
                  fontSize: 18,
                  fontWeight: '600',
                  color: colors.text,
                  lineHeight: 24
            },
            body:{
                  fontSize: 16,
                  color: colors.text,
                  lineHeight: 22
            },
            bodySmall:{
                  fontSize: 14,
                  color: colors.text,
                  lineHeight: 20
            },
            caption: {
                  fontSize: 12,
                  color: colors.text,
                  lineHeight: 16
            }
      },
      shadows:{
            sm:{
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height:1},
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation:2
            },
            md:{
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height:2},
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation:4
            },
            lg:{
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height:4},
                  shadowOpacity: 0.15,
                  shadowRadius: 8,
                  elevation:8
            }
      }
};

export default themes;