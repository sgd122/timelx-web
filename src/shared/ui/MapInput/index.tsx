import { Popover, TextField } from '@radix-ui/themes';
import type React from 'react';
import { useState } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

import { useRegister } from '@/shared/providers/RegisterProvider';

interface MapInputProps {
  className?: string;
  inputProps:
    | (TextField.RootProps & React.RefAttributes<HTMLInputElement>)
    | undefined;
}

const MapInput: React.FC<MapInputProps> = ({ className, inputProps }) => {
  const { watch, setValue } = useRegister();
  const name = inputProps?.name as string;
  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS,
  });
  const [chosen, setChosen] = useState<{
    input: string;
    e: React.ChangeEvent<HTMLInputElement>;
  }>();
  const isOpen = !!chosen?.input && placePredictions.length > 0;

  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger>
        <TextField.Root
          variant="soft"
          className={className}
          required={true}
          value={String(watch(name))}
          {...inputProps}
          onChange={(e) => {
            inputProps?.onChange?.(e);
            setChosen({ input: e.target.value, e });
            getPlacePredictions({ input: e.target.value });
          }}
        />
      </Popover.Trigger>

      <Popover.Content
        className="w-full shadow-lg rounded-md p-2 max-h-60 overflow-y-auto"
        side="bottom"
        align="start"
        forceMount={true}
      >
        {isOpen && (
          <ul className="list-none p-0 m-0">
            {placePredictions.map((item) => (
              <li
                key={item.place_id}
                className="cursor-pointer p-2 hover:bg-gray-500 "
                onClick={() => {
                  const updatedEvent = {
                    ...chosen.e,
                    target: {
                      ...chosen.e.target,
                      value: item.description, // ✅ e.target.value을 item.description으로 변경
                    },
                  };

                  inputProps?.onChange?.(updatedEvent);
                  setValue(name, item.description);
                  setChosen({ input: '', e: chosen.e });
                }}
              >
                {item.description}
              </li>
            ))}
          </ul>
        )}
      </Popover.Content>
    </Popover.Root>
  );
};

export default MapInput;
