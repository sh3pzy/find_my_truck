import {Text, View, FlatList, Pressable, Image, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images, offers} from '@/constants';
import {Fragment} from 'react';
import cn from 'clsx'
import AccountButton from '@/components/account-button';

export default function Index() {
  return (
    <SafeAreaView className='flex-1 bg-white-sand' edges={['top']}>
        <FlatList
          data={offers}
          style={{ flex: 1}}
          renderItem={({ item, index }) => {
            const isEven = index % 2 === 0

            return (
              <View>
                <Pressable
                  className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
                  style={{ backgroundColor: item.color }}
                  android_ripple={{ color: '#ffffff22' }}
                >
                  {({ pressed }) => (
                    <Fragment>
                      <View className='h-full w-1/2'>
                        <Image source={item.image} className={'size-full'} resizeMode={'contain'}/>
                      </View>

                      <View className={cn('offer-card__info flex-1', isEven ? 'pl-10' : 'pr-10')}>
                        <Text className='h1-bold text-white leading-tight'>
                          {item.title}
                        </Text>
                        <Image
                          source={images.arrowRight}
                          className='size-10'
                          resizeMode='contain'
                          tintColor='#ffffff'
                        />
                      </View>
                    </Fragment>
                  )}
                </Pressable>
              </View>
            )
          }}
          contentContainerClassName={'px-5'}
          ListHeaderComponent={() => (
              <View className='w-full flex-row justify-end'>
                <TouchableOpacity>
                  <AccountButton />
                </TouchableOpacity>
              </View>

          )}
        />
    </SafeAreaView>
  );
}