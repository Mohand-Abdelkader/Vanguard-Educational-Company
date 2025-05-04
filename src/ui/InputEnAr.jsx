function InputEnAr({
  register,
  name,
  englishLabel,
  englishPlaceHolder,
  arabicLabel,
  arabicPlaceHolder,
  isRequired,
  disabled,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {englishLabel}
        </label>
        <input
          type="text"
          disabled={disabled}
          placeholder={englishPlaceHolder}
          {...register(`${name}.en`, { required: isRequired })}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {arabicLabel}
        </label>
        <input
          type="text"
          placeholder={arabicPlaceHolder}
          {...register(`${name}.ar`, { required: isRequired })}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors text-right"
          dir="rtl"
        />
      </div>
    </div>
  );
}

export default InputEnAr;
