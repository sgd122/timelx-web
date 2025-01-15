import { Flex, Section, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { RegisterProvider } from '@/components/providers/RegisterProvider';
import { submitActionAtom } from '@/store/submitActionAtom';
import EventDetail from '@/views/event-new/_components/EventDetail';
import EventImage from '@/views/event-new/_components/EventImage';
import {
  detailFieldsSection0,
  detailFieldsSection1,
  detailFieldsSection2,
  detailFieldsSection3,
} from '@/views/event-new/constants/fieldDefinitions';
import { useEventForm } from '@/views/event-new/hooks/useEventForm';
import type { FormValues } from '@/views/event-new/types/form-values';

const EventNewContainer = () => {
  const [isSubmitAction, setSubmitAction] = useAtom(submitActionAtom);
  const { register, handleSubmit, formState } = useEventForm();

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted:', data);
  });

  useEffect(() => {
    if (isSubmitAction) {
      setSubmitAction(false);
      onSubmit();
    }
  }, [isSubmitAction]);

  return (
    <RegisterProvider register={register}>
      <div>
        <form onSubmit={onSubmit}>
          <Section className="flex flex-col gap-8 p-0">
            <EventImage name="image" error={formState.errors.image} />

            {detailFieldsSection0.map(
              ({ label, title, value, isRequired, placeholder }) => (
                <EventDetail<FormValues>
                  key={`event-form-${label}-${value}`}
                  label={label}
                  title={title}
                  name={value as keyof FormValues}
                  error={formState.errors[value as keyof FormValues]}
                  isRequired={isRequired}
                  placeholder={placeholder}
                />
              )
            )}

            <Flex direction="column" className="gap-1">
              <Text size="2">
                이벤트 날짜<span className="text-red-400"> *</span>
              </Text>
              <Flex className="gap-5" direction="column">
                <Flex className="gap-3.5 justify-between">
                  {detailFieldsSection1.map(
                    ({
                      label,
                      title,
                      value,
                      isRequired,
                      placeholder,
                      type,
                    }) => (
                      <EventDetail<FormValues>
                        key={`event-form-${label}-${value}`}
                        label={label}
                        title={title}
                        name={value as keyof FormValues}
                        error={formState.errors[value as keyof FormValues]}
                        isRequired={isRequired}
                        placeholder={placeholder}
                        type={type}
                      />
                    )
                  )}
                </Flex>
              </Flex>
            </Flex>

            <Flex direction="column" className="gap-1">
              <Text size="2">이벤트 시간</Text>
              <Flex className="gap-3.5 justify-between">
                {detailFieldsSection2.map(
                  ({ label, title, value, isRequired, placeholder, type }) => (
                    <EventDetail<FormValues>
                      key={`event-form-${label}-${value}`}
                      label={label}
                      title={title}
                      name={value as keyof FormValues}
                      error={formState.errors[value as keyof FormValues]}
                      isRequired={isRequired}
                      placeholder={placeholder}
                      type={type}
                    />
                  )
                )}
              </Flex>
              <Flex className="justify-center mt-0.5">
                <IoIosInformationCircleOutline size="18" className="mr-1" />
                <Text size="2">
                  다양한 시간에 걸쳐 진행되는 경우, ‘이벤트 정보’에 별도로
                  입력해주세요.
                </Text>
              </Flex>
            </Flex>

            {detailFieldsSection3.map(
              ({ label, title, value, fieldType, isRequired, placeholder }) => (
                <EventDetail<FormValues>
                  key={`event-form-${label}-${value}`}
                  label={label}
                  title={title}
                  name={value as keyof FormValues}
                  error={formState.errors[value as keyof FormValues]}
                  fieldType={fieldType}
                  isRequired={isRequired}
                  placeholder={placeholder}
                />
              )
            )}
          </Section>
        </form>
      </div>
    </RegisterProvider>
  );
};

export default EventNewContainer;
