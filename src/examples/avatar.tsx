import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';



const AvatarSimpleExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Avatar>
        <AvatarImage
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
          alt="pokemon"
        />
      </Avatar>
    </div>
  );
};

const AvatarCustomExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Avatar>
        <AvatarImage
          className="bg-red-500"
          onLoadingStatusChange={(para) => console.log(para)}
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
          alt="pokemon"
        />
      </Avatar>
    </div>
  );
};

const AvatarCustomSize: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Avatar className="w-40 h-40">
        <AvatarImage
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
          alt="pokemon"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

const AvatarWithFallback: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Avatar>
        <AvatarImage src="" alt="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export {
  AvatarSimpleExample,
  AvatarCustomExample,
  AvatarCustomSize,
  AvatarWithFallback,
};
