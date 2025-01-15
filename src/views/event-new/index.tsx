import { Flex, Section, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';

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
        <Text>이벤트 등록페이지</Text>
        <form onSubmit={onSubmit}>
          <Section className="flex flex-col gap-8 p-0">
            <EventImage />

            {detailFieldsSection0.map(
              ({ label, value, isRequired, placeholder }) => (
                <EventDetail<FormValues>
                  key={`event-form-${label}`}
                  label={label}
                  name={value as keyof FormValues}
                  error={formState.errors[value as keyof FormValues]}
                  isRequired={isRequired}
                  placeholder={placeholder}
                />
              )
            )}

            <Flex className="gap-5" direction="column">
              <Flex className="gap-3.5 justify-between">
                {detailFieldsSection1.map(
                  ({ label, value, isRequired, placeholder }) => (
                    <EventDetail<FormValues>
                      key={value}
                      label={label}
                      name={value as keyof FormValues}
                      error={formState.errors[value as keyof FormValues]}
                      isRequired={isRequired}
                      placeholder={placeholder}
                    />
                  )
                )}
              </Flex>
              <Flex className="gap-3.5 justify-between">
                {detailFieldsSection2.map(
                  ({ label, value, isRequired, placeholder }) => (
                    <EventDetail<FormValues>
                      key={`event-form-${label}`}
                      label={label}
                      name={value as keyof FormValues}
                      error={formState.errors[value as keyof FormValues]}
                      isRequired={isRequired}
                      placeholder={placeholder}
                    />
                  )
                )}
              </Flex>
              {detailFieldsSection3.map(
                ({ label, value, fieldType, isRequired, placeholder }) => (
                  <EventDetail<FormValues>
                    key={`event-form-${label}`}
                    label={label}
                    name={value as keyof FormValues}
                    error={formState.errors[value as keyof FormValues]}
                    fieldType={fieldType}
                    isRequired={isRequired}
                    placeholder={placeholder}
                  />
                )
              )}
            </Flex>
          </Section>
        </form>
      </div>
    </RegisterProvider>
  );
};

export default EventNewContainer;
