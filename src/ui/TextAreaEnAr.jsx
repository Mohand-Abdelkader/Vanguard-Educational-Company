function TextAreaEnAr({
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {englishLabel}
        </label>
        <textarea
          disabled={disabled}
          placeholder={englishPlaceHolder}
          {...register(`${name}.en`, { required: isRequired })}
          className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
          rows="6"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {arabicLabel}
        </label>
        <textarea
          disabled={disabled}
          placeholder={arabicPlaceHolder}
          {...register(`${name}.ar`, { required: isRequired })}
          className="w-full px-4 py-2 text-right text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
          rows="6"
          dir="rtl"
        />
      </div>
    </div>
  );
}

export default TextAreaEnAr;
